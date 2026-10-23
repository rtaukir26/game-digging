import React from "react";
import WireWorms from "./WireWorms";
import { allImages } from "../../../utils/images";
import GameCharacter from "./GameCharacter";
import { COLORS_WORM, insectClass, insectID } from "../../../constant/constant";

const WormsContainer = ({ randomData }) => {
  const getRandomColor = (pos = 0) => {
    return COLORS_WORM.filter((c, i) => randomData.includes(i))[pos];
  };
  return (
    <React.Fragment>
      <WireWorms
        wormId={insectID.worm_01}
        num={8}
        width={4}
        gap={5}
        headWidth={6}
        height={5}
        headHeight={6}
        top={randomData[1]}
        left={320}
        // bg="#55101e"
        // headBG="#691818"
        bg={getRandomColor(0)}
        headBG={getRandomColor(2)}
        moveSpeed="100s"
        delayAnim="0s"
        // animStarts="10%"
        animStarts={randomData[1] + "%"}
        animEnds="100%"
        step="0.1s"
        translateY="-2px"
        // level="1"
      />
      <WireWorms
        wormId={insectID.worm_02}
        num={15}
        width={6}
        gap={7}
        headWidth={9}
        height={8}
        headHeight={10}
        top={randomData[2] * 2}
        left={80}
        bg={getRandomColor(1)}
        headBG={getRandomColor(3)}
        moveSpeed="150s"
        delayAnim="0s"
        animStarts={-randomData[1] + "%"}
        animEnds="110%"
        translateY="-3px"
        step="0.18s"
      />
      <WireWorms
        wormId={insectID.worm_03}
        num={10}
        width={5}
        gap={5}
        height={8}
        headWidth={9}
        headHeight={10}
        left={150}
        bg={getRandomColor(3)}
        headBG={getRandomColor(2)}
        moveSpeed="90s"
        delayAnim="4s"
        top={randomData[1] * 2}
        animStarts={-randomData[3] + "%"}
        animEnds="110%"
        step="0.1s"
        translateY="-2px"
      />
      <WireWorms
        wormId={insectID.worm_04}
        num={14}
        width={5}
        gap={7}
        height={6}
        headWidth={9}
        headHeight={9}
        left={310}
        bg={getRandomColor(4)}
        headBG={getRandomColor(5)}
        moveSpeed="100s"
        delayAnim="0s"
        top={randomData[3] * 3}
        animStarts={randomData[3] + "%"}
        animEnds="100%"
        step="0.15s"
        translateY="-4px"
      />

      {/** GIFs */}
      {/* Mouse 1 */}
      <GameCharacter
        insectId={insectID.mouse_01}
        cls={insectClass.mouse}
        level="2"
        img={allImages.mouseWalkIcon}
        left="20%"
        width="7%"
        reward="250"
        reduceHealth="10"
        moveSpeed="40s"
        delayAnim="0s"
        top={randomData[5] * 3}
        animStarts={randomData[3] + "%"}
        animEnds="100%"
        face="1" //face 1 or -1
        brightness="20%"
      />
      <GameCharacter
        insectId={insectID.mouse_02}
        cls={insectClass.mouse}
        level="2"
        img={allImages.mouseWalkIcon}
        left="50%"
        width="9%"
        reward="250"
        reduceHealth="10"
        moveSpeed="30s"
        delayAnim="0s"
        top={randomData[9] * 6}
        animStarts="100%"
        animEnds={randomData[4] + "%"}
        face="-1"
        brightness="0%"
      />
      <GameCharacter
        insectId={insectID.spider_01}
        cls={insectClass.mouse}
        level="2"
        img={allImages.spiderZikZakIcon}
        top="300px"
        left="30%"
        width="8%"
        reward="150"
        reduceHealth="10"
        moveSpeed="90s"
        delayAnim="0s"
        animStarts="10%"
        animEnds="100%"
        face="1"
        brightness="0%"
      />
      <GameCharacter
        insectId={insectID.spider_02}
        cls={insectClass.mouse}
        level="2"
        img={allImages.spiderWalkIcon}
        top="250px"
        left="30%"
        width="5%"
        reward="150"
        reduceHealth="10"
        moveSpeed="80s"
        delayAnim="0s"
        animStarts="10%"
        animEnds="100%"
        face="1"
        brightness="0%"
      />
      {/** Beetle */}
      <GameCharacter
        insectId={insectID.beetle_01}
        cls={insectClass.moveY}
        level="2"
        img={allImages.beetleGif}
        top="250px"
        // left="25%"
        left={randomData[8] * 6 + "px"} //it is moving in Y direction so left position is dynamic
        width="6%"
        reward="150"
        reduceHealth="5"
        moveSpeed="30s"
        delayAnim="0s"
        animStarts="200%"
        animEnds="100%"
        face_y="-1"
        brightness="10%"
      />
      <GameCharacter
        insectId={insectID.beetle_02}
        cls={insectClass.moveY}
        level="2"
        img={allImages.beetleGif}
        top="200px"
        // left="25%"
        left={randomData[9] * 2 + "px"} //it is moving in Y direction so left position is dynamic
        width="5%"
        reward="150"
        reduceHealth="5"
        moveSpeed="25s"
        delayAnim="2s"
        animStarts="200%"
        animEnds="80%"
        face_y="-1"
        brightness="60%"
      />
    </React.Fragment>
  );
};

export default WormsContainer;
