import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import notify from "../../Utils/helper/notifyToast";
import { getAuth, signOut } from "firebase/auth";
import { uploadFile } from "./../../Services/firebase.service";
import {
  updateProfilePicture,
  updateStationInfo,
} from "../../Services/station.service";

import Styles from "./About.module.css";

import { ReactComponent as EditIcon } from "../../Assets/Profile/EditIcon.svg";
import { ReactComponent as SaveIcon } from "../../Assets/Profile/SaveIcon.svg";

import { AboutSecHeadersData } from "./../StaticData";

import EditableTextArea from "./EditableTextArea";

const tempData = {
  phone: "9966445522",
  email: "abc@xyz.com",
  address: `Shop No 48, Heera Panna Shopping Centre, Haji Ali, Cumballa Hill, Mumbai, Maharashtra`,
  state: "Gujarat",
  city: "Surat",
  profilePicture:
    "https://s3-alpha-sig.figma.com/img/add1/75d2/10c497455f79cd54356f8b1580320962?Expires=1640563200&Signature=ZN-bH~otrw1Bp5SBdME9woz597ncstqa5rNsHPhQpoLPhKkrU6s6BHhwzj1UdVRwqiKwVRgyUmkCuoXQ7jPfNFbdPUXpWpbGevUcpxHwxwLMsmuwdVypt1DfEFTviTvWK3rfbYG-WinF-JOAe-P1nMXX7FaUy3t1~v~SIc1JttLSQ09S-sMDl8b7~WT~YDB27ibKOrUpU5U1RMk-9nSMWe3yRHWbuubuE-lLc2OgICSxJzZcUpd2JfPQf0o7hEJby0NiRIoP8NIB23EVSikcLMdy0ZGHkYGzv2btKE0sxpyib6Co~Z5Sxs8acrUlOLpzInNNoGSEt3KqCAefjiawaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  location:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59499.58498205518!2d72.88424786739341!3d21.24278804338059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0474a3047158d%3A0x8053e89cd105a418!2sElectric%20Vehicle%20Charging%20Station!5e0!3m2!1sen!2sin!4v1639556330888!5m2!1sen!2sin",
};

function About({ userData = tempData, isStation = false }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const profileImageInputRef = useRef(12);
  const profileImageRef = useRef(123);

  const [currentUserData, setCurrentUserData] = useState(userData);

  const [overallStates, setOverallStates] = useState({
    isInEditMode: false,
    hasBeenChanged: false,
  });

  useEffect(() => {
    setCurrentUserData(userData);
  }, [userData]);

  useEffect(() => {
    if (
      currentUserData.address === userData.address &&
      currentUserData.location === userData.location
    ) {
      setOverallStates({
        ...overallStates,
        hasBeenChanged: false,
      });
    } else {
      setOverallStates({
        ...overallStates,
        hasBeenChanged: true,
      });
    }
  }, [
    currentUserData.address,
    userData.address,
    currentUserData.location,
    userData.location,
  ]);

  const handleAddressEdit = (newAddress) => {
    setCurrentUserData({ ...currentUserData, address: newAddress });
  };

  const handleURLChange = (newURL) => {
    setCurrentUserData({ ...currentUserData, location: newURL });
  };

  const saveData = async () => {
    //Save the data
    if (isStation && overallStates.hasBeenChanged) {
      try {
        // Station Overall API Call
        notify("Info updated successfully", "success");
        console.log(currentUserData.address, currentUserData.location);
        await updateStationInfo(
          {
            address: currentUserData.address,
            location: currentUserData.location,
          },
          userData.accessToken
        );
      } catch (err) {
        notify(err.response);
      }
    } else {
      notify("No changes to save");
    }
    setOverallStates({ ...overallStates, isInEditMode: false });
  };

  const discardChanges = () => {
    setCurrentUserData(userData);
    setOverallStates({ ...overallStates, isInEditMode: false });
  };

  const handleProfileFileChange = async () => {
    const [file] = profileImageInputRef.current.files;
    try {
      if (file) {
        notify("Uploading profile picture...", "info");
        profileImageRef.current.src = URL.createObjectURL(file);
        const downloadURL = await uploadFile(file, "profile");
        // call api
        await updateProfilePicture(downloadURL, userData.accessToken);
        notify("Profile picture updated successfully", "success");
      }
    } catch (err) {
      console.log(err);
      console.log(err.response);
      notify(err, "error");
    }
  };

  return (
    <div className={Styles.Wrapper}>
      <div
        className={
          Styles.PersonalInfoWrapper +
          (isStation ? "" : " " + Styles.UserProfile)
        }
      >
        <h4 className={Styles.PersonalInfoHeader + " " + Styles.InfoHeader}>
          {AboutSecHeadersData.personalInfo}
        </h4>
        <div className={Styles.PersonalInfoContent}>
          {!isStation ? (
            <div className={Styles.PersonalInfoImageWrapper}>
              <img
                ref={profileImageRef}
                src={currentUserData.profilePicture}
                alt="Profile"
                className={Styles.PersonalInfoImage}
                onLoad={(e) => {
                  e.target.style.opacity = 1;
                }}
              />
              <div
                className={Styles.EditImageScrim}
                onClick={() => {
                  profileImageInputRef.current.click();
                }}
              >
                <EditIcon className={Styles.EditImageIcon} />
              </div>
              <input
                ref={profileImageInputRef}
                type="file"
                className={Styles.EditImageInput}
                accept="image/*"
                onChange={handleProfileFileChange}
              />
            </div>
          ) : null}
          <div
            className={
              Styles.PersonalInfoMobileAndEmail +
              " " +
              (isStation ? Styles.StationPersonalInfoMobileAndEmail : "")
            }
          >
            <p className={Styles.PersonalInfoContentMobile}>{userData.phone}</p>
            <p className={Styles.PersonalInfoContentEmail}>{userData.email}</p>
            <p className={Styles.PersonalInfoCityState}>
              {userData.city + ", " + userData.state}
            </p>
            <span className={Styles.PersonalInfoFSSAI}>{userData.fssaiId}</span>
          </div>
        </div>
      </div>
      {isStation ? (
        <div className={Styles.EditableInfoWrapper}>
          <div className={Styles.EditSaveButtonWrapper}>
            {overallStates.isInEditMode ? (
              <>
                <div className={Styles.DiscardButton} onClick={discardChanges}>
                  Discard
                </div>
                <div
                  className={Styles.EditSaveButton + " " + Styles.SaveButton}
                  onClick={() => {
                    saveData();
                  }}
                >
                  Save{" "}
                  <SaveIcon
                    className={Styles.SaveIcon + " " + Styles.EditSaveIcon}
                  />
                </div>
              </>
            ) : (
              <div
                className={Styles.EditSaveButton + " " + Styles.EditButton}
                onClick={() => {
                  setOverallStates({
                    ...overallStates,
                    isInEditMode: true,
                  });
                }}
              >
                Edit{" "}
                <EditIcon
                  className={Styles.EditIcon + " " + Styles.EditSaveIcon}
                />
              </div>
            )}
          </div>
          <div
            className={Styles.StationInfoWrapper}
            style={isStation ? {} : { border: "none" }}
          >
            <h4 className={Styles.AddressInfoHeader + " " + Styles.InfoHeader}>
              {AboutSecHeadersData.address}
            </h4>

            <div className={Styles.EditableListItem}>
              <EditableTextArea
                inputValue={currentUserData.address}
                isEditable={overallStates.isInEditMode}
                dataChangeFun={handleAddressEdit}
              />
            </div>
            <h4 className={Styles.URLInfoHeader + " " + Styles.InfoHeader}>
              {AboutSecHeadersData.url}
            </h4>

            <div className={Styles.EditableListItem}>
              <EditableTextArea
                inputValue={currentUserData.location}
                isEditable={overallStates.isInEditMode}
                dataChangeFun={handleURLChange}
                focusIndex={1}
                inputClass={Styles.URLInput}
              />
            </div>
          </div>
        </div>
      ) : null}
      <div
        className={
          Styles.EditSaveButton +
          " " +
          Styles.LogoutButton +
          (isStation ? "" : " " + Styles.LogoutButtonUser)
        }
        onClick={() => {
          const auth = getAuth();
          signOut(auth)
            .then(() => {
              console.log("signed out");
              dispatch({
                type: "UPDATE_USER_DATA",
                details: null,
              });
            })
            .catch((error) => {
              console.log(error);
            });
          history.push("/");
        }}
      >
        Logout
      </div>
    </div>
  );
}

export default About;
