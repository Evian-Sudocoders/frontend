import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import styles from "./StationChargingPointsList.module.css";

import StationChargingPointsListItem from "./StationChargingPointsListItem";

import { ReactComponent as EditIcon } from "../../Assets/Profile/EditIcon.svg";
import { ReactComponent as SaveIcon } from "../../Assets/Profile/SaveIcon.svg";
import { ReactComponent as PlusIcon } from "../../Assets/_General/Plus.svg";

import notify from "../../Utils/helper/notifyToast";

const tempData = Array(2)
  .fill({})
  .map((_, index) => {
    return {
      id: index + 1,
      cost: Math.floor(Math.random() * 100),
      capacity: Math.floor(Math.random() * 40),
    };
  });

function StationChargingPointsList({ pointsData = tempData, refreshDataFun }) {
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

    console.log(
      currentPointsData.slice(pointsData.length - currentPointsData.length),
      pointsData.length - currentPointsData.length
    );

    let tempUpdateReqList = [];
    for (let i = 0; i < pointsData.length; i++) {
      if (!objectsEqual(currentPointsData[i], pointsData[i])) {
        tempUpdateReqList.push(i);
      }
    }
    updateReqList.current = tempUpdateReqList;
  }, [currentPointsData]);

  const handleSave = async () => {
    console.log(updateReqList.current);
    console.log(newAddReqList.current);
    if (hasDataChanged) {
      try {
        // Send Data to backend

        // refreshDataFun();
        notify("Info updated successfully", "success");
      } catch (error) {
        notify(error.response.data.errors[0].message, "error");
      }
    } else {
      notify("No changes to save");
    }
    setHasDataChanged(false);
    setIsInEditMode(false);
  };

  useEffect(() => {
    setCurrentPointsData(pointsData);
    updateReqList.current = [];
    newAddReqList.current = [];
  }, [pointsData]);

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
                  className={
                    styles.EditSaveButton +
                    " " +
                    styles.SaveButton +
                    " " +
                    (hasDataChanged ? styles.SaveButtonWithChanges : "")
                  }
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
                  keyIndex={item.id}
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
              id: currentPointsData.length + 1,
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
