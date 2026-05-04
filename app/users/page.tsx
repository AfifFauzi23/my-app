export default function learnpage() {
    return (
        <section className="min-h-screen bg-gray-200 p-8 flex flex-col justify-center items-center gap-2">
            <div className="flex gap-2 relative flex-col">
                <div className="bg-white p-6 w-96 rounded-3xl">
                    <div className="flex gap-6 flex-row justify-between border-b border-gray-100 pb-4">
                        <p className="font-bold text-black text-xl">Client details</p>
                        <img src="x.svg" alt="close" />
                    </div>
                    <div className="flex flex-row items-center gap-4 mt-5">
                        <img src="profile.png" className="w-14 h-14 rounded-full bg-indigo-100 object-cover" alt="Cornelius Greenfelder" />
                        <div className="flex flex-col gap-1">
                            <p className="text-lg font-bold text-black">Cornelius Greenfelder</p>
                            <div className="bg-green-100 p-1 w-24 rounded-md flex flex-row items-center justify-center gap-1">
                                <img src="award.svg" width="12" height="12" alt="award" />
                                <p className="text-xs font-bold text-black">Verified</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-5 mt-6">
                        <p className="font-bold text-black mb-3">Projects</p>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col gap-1 w-1/2">
                                <div className="flex flex-row items-center gap-2">
                                    <img src="hourglass.svg" width="15" height="15" alt="hourglass" />
                                    <p className="text-gray-500 text-sm">Ongoing</p>
                                </div>
                                <div className="flex flex-row items-baseline gap-2">
                                    <p className="text-xl font-bold text-black">2</p>
                                    <p className="text-gray-400 text-sm">($3.8k)</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 w-1/2">
                                <div className="flex flex-row items-center gap-2">
                                    <img src="check.svg" width="15" height="15" alt="check" />
                                    <p className="text-gray-500 text-sm">Completed</p>
                                </div>
                                <div className="flex flex-row items-baseline gap-2">
                                    <p className="text-xl font-bold text-black">25</p>
                                    <p className="text-gray-400 text-sm">($54k)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-5">
                        <div className="flex flex-row justify-between items-center">
                            <p className="font-bold text-black">Location</p>
                            <p className="text-gray-500">United States, New York</p>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <p className="font-bold text-black">With Us</p>
                            <p className="text-gray-500">6 Jan 2024</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 mt-6">
                        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
                            <img src="dots.svg" width="24" height="24" alt="dots" />
                        </div>
                        <div className="flex-1 bg-indigo-600 rounded-full flex flex-row items-center justify-center gap-2">
                            <img src="mail.svg" width="20" height="20" alt="mail" />
                            <p className="text-white font-bold">Message</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}