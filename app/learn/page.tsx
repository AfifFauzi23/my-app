export default function learnpage() {
    return (
        <section className="h-screen bg-gray-100 flex gap-6">
            <div className="bg-purple-300 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
                <div className="flex gap-3">
                    <img src="palette.svg" alt="Palette" />
                    <p>Design</p>
                </div>
                <div>
                    <h2 className="text-4xl font-bold">Figma</h2>
                    <p className="font-bold">8 Hours Ago</p>
                </div>
            </div>

                       <div className="bg-orange-300 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
                <div className="flex gap-3">
                    <img src="palette.svg" alt="Palette" />
                    <p>Design</p>
                </div>
                <div>
                    <h2 className="text-4xl font-bold">Python</h2>
                    <p className="font-bold">2 Days Ago</p>
                </div>
            </div>

                       <div className="bg-red-300 p-8 h-72 w-96 rounded-4xl flex flex-col justify-between text-blue-950">
                <div className="flex gap-3">
                    <img src="palette.svg" alt="Palette" />
                    <p>Design</p>
                </div>
                <div>
                    <h2 className="text-4xl font-bold">Sketch</h2>
                    <p className="font-bold">2 Days Ago</p>
                </div>
            </div>
        </section>
    )
}

