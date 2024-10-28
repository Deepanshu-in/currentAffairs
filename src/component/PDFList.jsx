import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { AiFillCaretDown } from "react-icons/ai"; // Importing react-icons for dropdown arrow
import { toast } from "react-toastify";
import { IoCloudDownloadOutline } from "react-icons/io5";

import "react-toastify/dist/ReactToastify.css";
const PDFList = () => {
  let [loading, setLoading] = useState(true);
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
      setLoading(false);
    };

    fetchFoldersAndContents();
  }, []);

  // Function to toggle dropdown visibility
  const handleToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div>
      <div className=" h-[350px] md:h-[450px]">
        {!loading ? (
          <ul className="flex flex-col gap-2 p-2 m-2">
            {folders.map((folder, index) => (
              <li key={index} className="mb-4">
                <div
                  className="flex items-center justify-between w-[300px] md:w-[500px] border border-black shadow-lg bg-blue-700 text-white py-2 px-4 rounded-lg cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <span>{folder.folderPath.toUpperCase()}</span>
                  <AiFillCaretDown
                    className={`transform ${
                      openDropdown === index ? "rotate-180" : ""
                    } transition-transform duration-500 ease-in-out`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-max-height duration-1000 ease-in-out ${
                    openDropdown === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  {openDropdown === index && (
                    <ul className="bg-white shadow-lg border border-black mx-auto rounded-lg mt-1 w-[290px] md:w-[490px] overflow-auto divide-y divide-gray-200  hover:bg-gray-100 cursor-pointer">
                      {folder.items.length > 0 ? (
                        folder.items.map((item, idx) => (
                          <li key={idx}>
                            <a
                              href={item.url}
                              rel="noopener noreferrer"
                              className="flex justify-between px-4 items-center py-2 text-gray-800"
                              onClick={() =>
                                toast.info("Downloading....", {
                                  position: "bottom-center",
                                  autoClose: 2000,
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
                              <IoCloudDownloadOutline />
                            </a>
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-2">Coming Soon...</li>
                      )}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="w-[900px] p-4">
            <div className="border flex flex-col gap-6 border-black shadow rounded-md p-4 h-[280px] w-[300px] md:w-[500px] mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFList;
