import CryptoJS from "crypto-js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const encryptData = (data) => {
  const secretKey = import.meta.env.SECRET_KEY || "secretKey";
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

const decryptData = (data) => {
  const secretKey = import.meta.env.SECRET_KEY || "secretKey";
  const bytes = CryptoJS.AES.decrypt(data, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

const RedirectBack = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(-1);
  }, [navigate]);
  return null;
};

export { encryptData, decryptData, RedirectBack };
