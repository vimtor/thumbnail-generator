import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Canvas from "./components/canvas";
import { toPng } from "html-to-image";
import download from "downloadjs";
import Generator from "./components/generator";
import BoxSection from "./components/box-section";
import FontSection from "./components/font-section";
import FontProperties from "./types/fonts";
import WebFont from "webfontloader";

const App = () => {
  const [image, setImage] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 200, height: 200 });
  const [fontSettings, setFontSettings] = useState<FontProperties>({
    color: "fff",
    weight: "regular",
    style: "regular",
    family: "Roboto",
    variant: "regular",
    size: 96,
  });

  const ref = useRef<HTMLDivElement>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setImage(URL.createObjectURL(file));
  }, []);

  const handleDownload = async () => {
    if (!ref.current) return;

    const images = Array.from(ref.current.childNodes);
    let index = 1;

    for (const image of images) {
      const dataUrl = await toPng(image as HTMLElement);
      download(dataUrl, `file-${index}.png`);
      index += 1;
    }
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: [`${fontSettings.family}:${fontSettings.variant}`],
      },
    });
  }, [fontSettings.family, fontSettings.variant]);

  return (
    <ChakraProvider>
      <Flex direction="column" h="100vh">
        <Navbar />
        <Flex h="100%">
          <Canvas
            fontSettings={fontSettings}
            image={image}
            position={position}
            size={size}
            onDrop={onDrop}
            onDrag={(event, delta) => {
              setPosition({ x: delta.x, y: delta.y });
            }}
            onResize={(event, direction, { style }, delta, position) => {
              setSize({
                width: parseInt(style.width),
                height: parseInt(style.height),
              });
              setPosition(position);
            }}
          />
          <Sidebar onDownload={handleDownload} onClear={() => setImage("")}>
            <BoxSection
              size={size}
              position={position}
              onSizeChange={setSize}
              onPositionChange={setPosition}
            />
            <FontSection value={fontSettings} onChange={setFontSettings} />
          </Sidebar>
        </Flex>
      </Flex>
      <Generator ref={ref} image={image} position={position} size={size} />
    </ChakraProvider>
  );
};

export default App;
