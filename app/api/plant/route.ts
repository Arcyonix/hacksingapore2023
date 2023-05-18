import { NextResponse } from 'next/server'
import axios from 'axios'

/* Sends a GET request to PERENUAL to get the ID of the plant based on name */
/* Returns a response data which contains ID of the plant */

export async function POST(request: Request) {
  const { nameOfPlant } = await request.json()
  console.log(nameOfPlant)
  try {
    const response = await axios.get(
      "https://perenual.com/api/species-list?key=" + process.env.PERENUAL + "&q=" + nameOfPlant
    );
    const PerenualDataResponse: PerenualDataResponse = response.data;
    const PlantID = PerenualDataResponse.data[0].id;
    const PlantImage = PerenualDataResponse.data[0].default_image.thumbnail;
    console.log("hello")
    console.log(PlantImage)
    console.log(PlantID)
    return NextResponse.json({
      PlantID: PlantID,
      PlantImage: PlantImage
    })
  } catch (error) {
    console.error('Error fetching species:', error);
  }
}