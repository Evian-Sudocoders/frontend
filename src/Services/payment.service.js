import axios from "axios";
import { INITIALIZE_BOOKING_URL, VERIFY_BOOKING_URL } from "../Utils/constants";

import notify from "../Utils/helper/notifyToast";

export const paymentInitialization = async (
  accessToken,
  stationId,
  vehicleNumber,
  chargingPoint,
  slots,
  charges
) => {
  try {
    const { data } = await axios.post(
      INITIALIZE_BOOKING_URL,
      {
        stationId,
        vehicleNumber,
        chargingPoint,
        slots,
        charges,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const payementService = async (
  amount,
  orderId,
  bookingId,
  accessToken,
  userData
) => {
  try {
    var options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: amount,
      currency: "INR",
      name: "Evian",
      description: "Payment Booking Course",
      image: "",
      order_id: orderId,
      handler: async function (response) {
        await PaymentVerification(
          response.razorpay_payment_id,
          response.razorpay_signature,
          orderId,
          bookingId,
          accessToken
        );
      },
      prefill: {
        name: userData?.name,
        email: userData?.email,
        contact: userData.number ? userData?.number : "",
      },
      notes: {
        address: "Evian Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      //   alert(response.error.code);
      //   alert(response.error.description);
      //   alert(response.error.source);
      //   alert(response.error.step);
      //   alert(response.error.reason);
      //   alert(response.error.metadata.order_id);
      //   alert(response.error.metadata.payment_id);
      notify("Payment Failed", "error");
    });
    rzp1.open();
  } catch (error) {
    alert(error);
  }
};

export const PaymentVerification = async (
  razorpay_payment_id,
  razorpay_signature,
  order_id,
  bookingId,
  accessToken
) => {
  try {
    const { data } = await axios.post(
      VERIFY_BOOKING_URL,
      {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        orderId: order_id,
        bookingId: bookingId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    notify("Payment Successful", "success");
    return data;
  } catch (error) {
    console.log(error);
  }
};
