import {
  MdNotificationsNone,
  MdPerson,
} from "react-icons/md";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">

      <div className="flex justify-between items-center px-8 h-20">

        <input
          type="text"
          placeholder="Search companies..."
          className="w-96 px-5 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex items-center gap-6">

          <button className="hover:text-blue-600">

            <MdNotificationsNone size={28} />

          </button>

          <div className="flex items-center gap-3">

            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">

              <MdPerson size={22} />

            </div>

            <div>

              <p className="font-semibold">

                Guest User

              </p>

              <p className="text-sm text-gray-500">

                Investor

              </p>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}