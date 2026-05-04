export default function learnpage() {
    return (
        <section className="min-h-screen bg-gray-200 p-8 flex flex-col justify-center items-center gap-2">
            <div className="flex gap-2 relative flex-col">
                <div className="bg-gray-100 p-8 h-100 w-90 rounded-3xl">
                    <div className="flex gap-6 flex-row justify-between">
                        <p className=" font-bold text-black">Client details</p>
                        <img src="x.svg" alt="Client details" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex gap-3 flex-row">
                            <img src="profile.png" width="40" height="40" alt="Client details" />
                            <p className="text-1xl font-bold text-black">Cornelius Greenfolder</p>
                        </div>
                        <div className="bg-green-300 p-2 h-10 w-40 rounded-2xl flex-col justify-center">
                            <img src="award.svg" width="15" height="15" alt="award" />
                            <p className=" text-black">Verified</p>
                       <div className="bg-blue-100 p-2 h-50 w-60 rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
