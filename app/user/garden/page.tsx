"use client";

import React, { useEffect, useState } from "react";
import Garden from "./components/Garden";
import AddPlant from "./components/model/AddPlant";
import { useGardenContext } from "@/app/context/gardenContext";
import { supabase } from "@/config/dbConnect";
import ListPlants from "./components/listOfPlants/ListPlants";
import RecipeButton from "@/components/RecipeButton";

export default function page({}) {
    const { showAddPlantModal, userUUID }: any = useGardenContext();

    useEffect(() => {
        const fetchPlantsFromUser = async () => {
            const { data, error } = await supabase
                .from("plants")
                .select(
                    "plant_id, y_coor, x_coor, tree_number, image_url, common_name"
                )
                .eq("uuid", userUUID);
            console.log(data);
            const treePositions = data.map(
                ({ tree_number, y_coor, x_coor, plant_id }) => [
                    tree_number + "/" + plant_id,
                    x_coor,
                    y_coor,
                ]
            );
            console.log(treePositions);
            setTreePositions(treePositions);

            const plantsList = data.map((item) => ({
                image_url: item.image_url,
                plant_name: item.common_name,
                plant_id: item.plant_id
            }));
            setArrayOfUserPLants(plantsList);
        };
        if (userUUID) {
            fetchPlantsFromUser();
        }
    }, [showAddPlantModal, userUUID]);

    const [treePositions, setTreePositions] = useState<TreePosition[][]>([]);
    const [arrayOfUserPLants, setArrayOfUserPLants] = useState<UserPlants[]>(
        []
    );
    console.log(arrayOfUserPLants);
    return (
        <>
            {showAddPlantModal ? (
                <AddPlant setTreePositions={setTreePositions} />
            ) : (
                <>
                    <Garden itemPositions={treePositions} />
                    <ListPlants arrayOfUserPLants={arrayOfUserPLants} />
                </>
            )}
            <RecipeButton href="/user/garden/recipes" />
        </>
    );
}
