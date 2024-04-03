import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../data/firebase";

// interface Task { }
const AddTask = (): React.JSX.Element => {
    const [title, setTitle] = useState<string>('');

    const insertarTask = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        if (title !== "") {
            await addDoc(collection(db, "Task"), {
                title: title,
                completed: false,
            });
            setTitle('');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <form onSubmit={insertarTask} className="flex items-center justify-center gap-3">
                <div>
                    <input
                        className="py-3 px-4 outline-none rounded-lg border border-gray-300 focus:border-blue-500"
                        type="text"
                        placeholder="Ingresar una tarea"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <button className="px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-50">
                        Ingresar tarea
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
