"use client";
import { motion } from 'framer-motion';
import React from 'react';
import './game.css'
import { useRouter } from 'next/navigation';

const Tile = ({ src, x, y, z, ybase, plantID, dbPlantID }: any) => {
    const router = useRouter();

    return (
        <>
            {
                src && src.includes('tree') ? <>

                    <motion.img
                        whileHover={{ opacity: 0.2 }

                        }
                        alt="garden_tile"
                        src="/user/image/garden/land_both.png"
                        className="tile"
                        style={{ left: `${x}%`, top: `${ybase}%`, zIndex: z }}
                    />
                    < motion.img

                        whileHover={{ opacity: 0.5 }}
                        onClick={() => router.push('/user/garden/' + plantID + '/' + dbPlantID)}
                        alt="garden_tile"
                        src={src}
                        className="tile"
                        style={{ left: `${x}%`, top: `${y}%`, zIndex: z }}
                    />
                </>
                    :
                    < motion.img

                        whileHover={{ opacity: 0.5 }}
                        alt="garden_tile"
                        src={src}
                        className="tile"
                        style={{ left: `${x}%`, top: `${y}%`, zIndex: z }}
                    />
            }

        </>
    );
}

export default Tile;