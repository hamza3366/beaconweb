import Input from "./Input";

export default function Topbar() {
    return (
        <div className="w-9/12  bg-gray-800">
            <div className="bg-gray-700 flex items-center justify-end" style={{ height: '60px' }}>
                <div className="px-4 flex items-center justify-end" >
                    <div>
                        <img
                            className="inline-block h-9 w-9 rounded-full"
                            src={require("../assets/images/harisdp.jpg").default}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">Haris Sharif</p>
                        <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">Last Viewed: 13:20</p>
                    </div>
                </div>
            </div>


            <div className="p-4">
                <div className="text-white ">
                    Main Content
                </div>

                <div>
                    <Input type={"text"} placeholder={"Please type something"} style={""} />
                </div>
            </div>
        </div>
    )
}