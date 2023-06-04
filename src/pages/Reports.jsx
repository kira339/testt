import React from "react";

export default function Reports() {
  return (
    <div className="bg-indigo-500 rounded-xl w-full m-20 p-4 ">
      <div className="grid gap-4 grid-row-2 mt-20 ">
        <div className="bg-green-500  w-5/6 mx-auto mt-20 h-3/4">
          <h1>Reports</h1>
          <ul class="flex justify-end">
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">
                Active
              </a>
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">
                Link
              </a>
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">
                Link
              </a>
            </li>
            <li class="mr-6">
              <a class="text-gray-400 cursor-not-allowed" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-red-500 w-5/6 mx-auto mt-40 h-3/4">
          <div className="bg-yellow-600 border-black border-solid border-8 mx-auto w-5/6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            blanditiis est incidunt asperiores, provident voluptatum repudiandae
            adipisci eligendi tenetur. Facilis.
          </div>
          <div className="bg-white mx-auto border-black border-solid border-8 w-5/6  mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            mollitia natus adipisci nam atque quis sit quibusdam deserunt
            commodi quam.
          </div>
        </div>
      </div>
    </div>
  );
}
