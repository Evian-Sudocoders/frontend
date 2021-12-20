import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import styles from "./StationChargingPointsList.module.css";

import StationChargingPointsListItem from "./StationChargingPointsListItem";

import { ReactComponent as EditIcon } from "../../Assets/Profile/EditIcon.svg";
import { ReactComponent as SaveIcon } from "../../Assets/Profile/SaveIcon.svg";
import { ReactComponent as PlusIcon } from "../../Assets/_General/Plus.svg";

import notify from "./../../Utils/helper/notifyToast";
import {
  getStationDataById,
  updateChargingPointInfo,
  addChargingPoints,
} from "./../../Services/station.service";

const tempData = Array(2)
  .fill({})
  .map((_, index) => {
    return {
      index: index + 1,
      cost: Math.floor(Math.random() * 100),
      capacity: Math.floor(Math.random() * 40),
    };
  });

function StationChargingPointsList({}) {
  const userData = useSelector((state) => state.userReducer.userData);

  const [pointsData, setPopointsData] = useState([]);

  const [currentPointsData, setCurrentPointsData] = useState(pointsData);
  const updateReqList = useRef([]);
  const newAddReqList = useRef([]);

  const [isInEditMode, setIsInEditMode] = useState(false);
  const [hasDataChanged, setHasDataChanged] = useState(false);

  const discardChanges = () => {
    setCurrentPointsData(pointsData);
    setIsInEditMode(false);
    setHasDataChanged(false);
  };

  const objectsEqual = (o1, o2) =>
    Object.keys(o1).length === Object.keys(o2).length &&
    Object.keys(o1).every((p) => o1[p] === o2[p]);

  const handleDataChange = (id, updatedData) => {
    let tempDataArr = [...currentPointsData];
    tempDataArr[id - 1] = { ...tempDataArr[id - 1], ...updatedData };

    setCurrentPointsData(tempDataArr);
  };

  useEffect(() => {
    fetchAndSetStationData();
  }, []);

  useEffect(() => {
    setCurrentPointsData(pointsData);
    updateReqList.current = [];
    newAddReqList.current = [];
  }, [pointsData]);

  const fetchAndSetStationData = async () => {
    try {
      const data = await getStationDataById(userData.uid);
      setPopointsData(data.chargingPoints);
    } catch (e) {
      notify("Internal Server Error", "error");
    }
  };

  useEffect(() => {
    newAddReqList.current = currentPointsData.filter(
      (x) => !pointsData.includes(x)
    );

    if (pointsData.length - currentPointsData.length < 0) {
      newAddReqList.current = currentPointsData.slice(
        pointsData.length - currentPointsData.length
      );
    } else {
      newAddReqList.current = [];
    }

    let tempUpdateReqList = [];
    for (let i = 0; i < pointsData.length; i++) {
      if (!objectsEqual(currentPointsData[i], pointsData[i])) {
        tempUpdateReqList.push(i);
      }
    }
    updateReqList.current = tempUpdateReqList;
  }, [currentPointsData]);

  const handleSave = async () => {
    try {
      if (updateReqList.current.length > 0) {
        let updateReqData = currentPointsData.filter((x, index) =>
          updateReqList.current.includes(index)
        );
        await updateChargingPointInfo(updateReqData, userData.accessToken);
      }

      if (newAddReqList.current.length > 0) {
        await addChargingPoints(newAddReqList.current, userData.accessToken);
      }
      notify("Charging points updated successfully", "success");

      fetchAndSetStationData();
    } catch (error) {
      notify(error, "error");
    }

    setHasDataChanged(false);
    setIsInEditMode(false);
  };

  return (
    <>
      <div className={styles.Wrapper}>
        <div className={styles.UpperSection}>
          <h3 className={styles.Title}>Menu</h3>
          <div className={styles.EditSaveButtonWrapper}>
            {isInEditMode ? (
              <>
                <div className={styles.DiscardButton} onClick={discardChanges}>
                  Discard
                </div>
                <div
                  className={styles.EditSaveButton + " " + styles.SaveButton}
                  onClick={() => {
                    handleSave();
                  }}
                >
                  Save{" "}
                  <SaveIcon
                    className={styles.SaveIcon + " " + styles.EditSaveIcon}
                  />
                </div>
              </>
            ) : (
              <div
                className={styles.EditSaveButton + " " + styles.EditButton}
                onClick={() => {
                  setIsInEditMode(true);
                }}
              >
                Edit{" "}
                <EditIcon
                  className={styles.EditIcon + " " + styles.EditSaveIcon}
                />
              </div>
            )}
          </div>
        </div>
        <div className={styles.ListWrapper}>
          {currentPointsData.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.PointItemWrapper}
                style={
                  index == 0
                    ? {
                        marginTop: "0px",
                      }
                    : {}
                }
              >
                <StationChargingPointsListItem
                  data={item}
                  isEditing={isInEditMode}
                  onChangeFun={handleDataChange}
                  keyIndex={item.index}
                />
              </div>
            );
          })}
        </div>
        <div
          className={styles.AddNewItemWrapper}
          onClick={() => {
            setIsInEditMode(true);
            let newItem = {
              index: currentPointsData.length + 1,
              cost: 0,
              capacity: 0,
            };
            let tempArray = currentPointsData.slice();
            tempArray.push(newItem);
            setCurrentPointsData(tempArray);
          }}
        >
          <PlusIcon className={styles.AddNewItemIcon} />
        </div>
      </div>
    </>
  );
}

export default StationChargingPointsList;
