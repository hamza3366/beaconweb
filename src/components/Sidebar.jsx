import {navigation} from "../helper/maps";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SidebarPanel(){
    return(
        <div className="flex-1 flex flex-col h-screen bg-gray-800 w-3/12 border-0 border-r-2 border-gray-600">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    <img
                        className="h-8 w-auto"
                        src={require("../assets/images/beaconlogo.png").default}
                    />
                </div>
                <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1" aria-label="Sidebar">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                            )}
                        >
                            <item.icon
                                className={classNames(
                                    item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                                    'mr-3 flex-shrink-0 h-6 w-6'
                                )}
                                aria-hidden="true"
                            />
                            <span className="flex-1">{item.name}</span>
                            {item.count ? (
                                <span
                                    className={classNames(
                                        item.current ? 'bg-gray-800' : 'bg-gray-900 group-hover:bg-gray-800',
                                        'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full'
                                    )}
                                >
                  {item.count}
                </span>
                            ) : null}
                        </a>
                    ))}
                </nav>
            </div>

        </div>
    )
}