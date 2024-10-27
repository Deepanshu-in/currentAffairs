import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { AiFillCaretDown } from "react-icons/ai"; // Importing react-icons for dropdown arrow
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PDFList = () => {
  const [folders, setFolders] = useState([]); // To store folder paths and their contents
  const [openDropdown, setOpenDropdown] = useState(null); // To track which dropdown is open

  useEffect(() => {
    const fetchFoldersAndContents = async () => {
      const folderRef = ref(storage, "/"); // Root folder
      const folderList = await listAll(folderRef);

      // Fetch the content of each folder
      const folderData = await Promise.all(
        folderList.prefixes.map(async (folder) => {
          const folderPath = folder.fullPath;
          const folderItems = await listAll(ref(storage, folderPath));

          // Get the URLs or names of items within the folder
          const items = await Promise.all(
            folderItems.items.map(async (item) => {
              const downloadURL = await getDownloadURL(item); // Get the URL
              return {
                name: item.name,
                url: downloadURL, // URL for the item
              };
            })
          );

          return { folderPath, items };
        })
      );

      setFolders(folderData);
    };

    fetchFoldersAndContents();
  }, []);

  // Function to toggle dropdown visibility
  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div>
      <ul className="flex flex-col gap-2 p-2 m-2">
        {folders.map((folder, index) => (
          <li key={index} className="mb-4">
            <div
              className="flex items-center justify-between w-[300px] md:w-[500px] bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <span>{folder.folderPath.toUpperCase()}</span>
              <AiFillCaretDown
                className={`transform ${
                  openDropdown === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Dropdown menu */}
            {openDropdown === index && (
              <ul className="bg-white shadow-lg rounded-lg mt-2 w-[300px] md:w-[500px] overflow-auto divide-y divide-gray-200">
                {folder.items.length > 0 ? (
                  folder.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.url}
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() =>
                          toast.info("Downloading....", {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          })
                        }
                      >
                        {item.name}
                      </a>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2">Coming Soon</li>
                )}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PDFList;
