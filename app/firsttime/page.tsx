"use client";

import React, { use, useEffect } from "react";
import { useGardenContext } from "@/app/context/gardenContext";
import { useRouter } from "next/navigation";
import { supabase } from "@/config/dbConnect";

const climateOptions = [
    "Tropical",
    "Dry",
    "Temperate",
    "Continental",
    "Polar",
    "Mountain",
    "Mediterranean",
    "Maritime",
    "Desert",
];
const spaceOptions = ["0-10", "10-20", "20-30", "30-40", "40-50", "50+"];
const experienceOptions = ["Beginner", "Intermediate", "Advanced"];
const typeOptions = ["Vegetables", "Fruits", "Herbs", "Flowers"];

function Page() {
    const router = useRouter();
    const { user }: any = useGardenContext();

    useEffect(() => {
        // async function getBool() {
        //     const { data, error } = await supabase
        //         .from("countries")
        //         .select("name")
        //         .limit(1)
        //         .single();
        //     console.log(data, error);
        // }
    }, []);

    async function handleSubmit(e: any) {
        e.preventDefault();
        const climate = e.target.climate.value;
        const space = e.target.space.value;
        const experience = e.target.experience.value;
        const type = e.target.type.value;

        console.log(climate, space, experience, type);
    }

    return (
        <main className="flex h-full w-full flex-col items-center justify-center bg-green-500">
            <h1 className="mb-10 text-3xl font-bold text-white">GardenApp</h1>
            <form
                id="details-form"
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-5"
            >
                <div className="flex flex-col">
                    <label
                        htmlFor="climate"
                        className="font-semibold text-white"
                    >
                        Climate
                    </label>
                    <select
                        className="h-8 w-64 px-1"
                        id="climate"
                        defaultValue="test"
                    >
                        <option value="test" disabled hidden />
                        {climateOptions.map((climate) => (
                            <option key={climate} value={climate}>
                                {climate}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="space" className="font-semibold text-white">
                        Available Space (meters)
                    </label>
                    <select
                        className="h-8 w-64 px-1"
                        id="space"
                        defaultValue="test"
                    >
                        <option value="test" disabled hidden />
                        {spaceOptions.map((space) => (
                            <option key={space} value={space}>
                                {space}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label
                        htmlFor="experience"
                        className="font-semibold text-white"
                    >
                        Gardening Experience
                    </label>
                    <select
                        className="h-8 w-64 px-1"
                        id="experience"
                        defaultValue="test"
                    >
                        <option value="test" disabled hidden />
                        {experienceOptions.map((experience) => (
                            <option key={experience} value={experience}>
                                {experience}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="type" className="font-semibold text-white">
                        Preferred Plant Type
                    </label>
                    <select
                        className="h-8 w-64 px-1"
                        id="type"
                        defaultValue="test"
                    >
                        <option value="test" disabled hidden />
                        {typeOptions.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    className="mt-5 h-8 w-64 rounded-xl bg-secondarydark-500 font-semibold text-white"
                    type="submit"
                    form="details-form"
                >
                    Lets Garden!
                </button>
            </form>
        </main>
    );
}

export default Page;
