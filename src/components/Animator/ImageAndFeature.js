import {
  Center,
  Text,
  Heading,
  VStack,
  HStack,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import "./ImageAndFeature.css";
import axios from "axios";

const data = {
  key: "feature",
  label: "Features",
  children: [
    {
      key: "1",
      label: "Facial Expression",
    },
    {
      key: "2",
      label: "Eye Movement",
    },
    {
      key: "GC",
      label: "Gender Customization",
      children: [
        {
          key: "3",
          label: "Female",
        },
        {
          key: "4",
          label: "Male",
        },
      ],
    },
    {
      key: "FA",
      label: "Face Aging",
      children: [
        {
          key: "5",
          label: "Older",
        },
        {
          key: "6",
          label: "Younger",
        },
      ],
    },
    {
      key: "7",
      label: "Anime-Style",
    },
    {
      key: "PA",
      label: "Produce Audio",
      children: [
        {
          key: "8",
          label: "Cartoon - Bye",
        },
        {
          key: "9",
          label: "Cartoon - Hello",
        },
        {
          key: "10",
          label: "Man - Bye",
        },
        {
          key: "11",
          label: "Man - Hello",
        },
        {
          key: "12",
          label: "Woman - Bye",
        },
        {
          key: "13",
          label: "Woman - Hello",
        },
      ],
    },
  ],
};

function ImageAndFeature() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccessful, setUploadSuccessful] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [outputImg, setOutputImg] = useState(null);
  const regex = /^[0-9\b]+$/;

  const NodeSelect = (event, nodeId) => {
    if (regex.test(nodeId)) {
      setSelectedFeature(nodeId);
      console.log(nodeId);
    } else {
      setSelectedFeature(null);
      console.log(nodeId);
    }
  };

  const renderTree = (features) => (
    <TreeItem key={features.key} nodeId={features.key} label={features.label}>
      {Array.isArray(features.children)
        ? features.children.map((feature) => renderTree(feature))
        : null}
    </TreeItem>
  );

  useEffect(() => {
    getOutput();
  }, []);

  async function getOutput() {
    await axios
      .get("/output-image", { responseType: "blob" })
      .then((response) => {
        var imageUrl = (window.URL || window.webkitURL).createObjectURL(
          new Blob([response.data])
        );
        setOutputImg(imageUrl);
      });
  }

  const onInputChange = (e) => {
    console.log(e.target.files[0]);

    setSelectedFile(e.target.files[0]);
  };

  const onButtonClick = (e) => {
    console.log("Button clicked..");
    e.target.value = "";
  };

  const transformImage = (e) => {
    setShowSpinner(true);
    console.log("UploadFeature", selectedFeature);
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch("/get-image", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Image sent");
        setUploadSuccessful(!uploadSuccessful);
        setShowSpinner(false);
        setSelectedFile(null);
        setTimeout(function () {
          window.location.reload();
        }, 35000);
      });
  };

  const sendFeatureID = (e) => {
    axios
      .post("/get-feature", {
        feature_id: selectedFeature,
      })
      .then(function (response) {
        console.log("Feature sent");
      });
  };

  return (
    <div className="container">
      <div className="Contents">
        <ul className="animateItem">
          <li className="items">
            <ChakraProvider>
              <Center
                sx={{
                  padding: 8,
                  width: "450px",
                  height: "500px",
                  border: "solid white",
                }}
              >
                <VStack spacing={7}>
                  <Heading>Upload your Image</Heading>
                  <Text textAlign="center">
                    /* accepted files (.png, .jpg) */
                  </Text>
                  <HStack>
                    <input
                      style={{ marginLeft: "80px" }}
                      type="file"
                      onChange={onInputChange}
                      onClick={onButtonClick}
                    ></input>
                    {showSpinner && (
                      <Center>
                        <Spinner size="xl" />
                      </Center>
                    )}
                  </HStack>
                  <Heading>Preview</Heading>
                  <SimpleGrid columns={3} spacing={8}></SimpleGrid>
                </VStack>
              </Center>
            </ChakraProvider>
          </li>
          <li className="items">
            <div
              className="inputFeat"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                width: "450px",
                height: "500px",
                border: "solid white",
              }}
            >
              <TreeView
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpanded={["feature"]}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{ height: 110, flexGrow: 1, marginTop: 4, marginLeft: 2 }}
                onNodeSelect={NodeSelect}
              >
                {renderTree(data)}
                <div style={{ height: "60px" }}></div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    onClick={function (event) {
                      transformImage();
                      setTimeout(sendFeatureID, 10000);
                      setTimeout(getOutput, 20000);
                    }}
                  >
                    Transform!
                  </button>
                </div>
              </TreeView>
            </div>
          </li>
          <li className="items">
            <div
              style={{
                height: "500px",
                width: "450px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "solid white",
                backdropFilter: "contrast(100%)",
              }}
            >
              <img src={outputImg} className="outputGif" type="image/gif" />
              <video
                src="http://localhost:8000/output-image"
                type="video/mp4"
                controls
                autoPlay
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ImageAndFeature;
