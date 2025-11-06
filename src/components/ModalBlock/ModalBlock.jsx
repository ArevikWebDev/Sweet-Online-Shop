import { useDispatch, useSelector } from "react-redux";
import { closeModal, setModalType, modalSelector } from "../../store/slices/modalSlice/modalSlice";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function ModalBlock() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOpen, type } = useSelector(modalSelector);
  const [isActiveForm, setIsActiveForm] = useState(false);
  const [isOpenDate, setIsOpenDate] = useState(false);
  const [isOpenTime, setIsOpenTime] = useState(false);

  const [selectedDate, setSelectedDate] = useState(t("modal.dateOptions.0"));
  const [selectedTime, setSelectedTime] = useState(t("modal.timeOptions.1"));

  const dateOptions = t("modal.dateOptions", { returnObjects: true });
  const timeOptions = t("modal.timeOptions", { returnObjects: true });


  if (!isOpen) return null;

  const closeWithFade = () => dispatch(closeModal());

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black/50 z-50 transition-opacity duration-200 cursor-pointer ${isOpen ? "opacity-100" : "opacity-0"
        }`}
      onClick={closeWithFade}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-6 rounded-xl shadow-lg w-[650px] relative transition-all duration-300 transform flex flex-col gap-[15px] justify-center cursor-pointer ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
      >
        <p onClick={closeWithFade} className="absolute top-3 right-4 text-gray-500 cursor-pointer text-xl font-bold hover:text-black">
          ×
        </p>

        <h2 className="text-xl font-semibold mb-4 text-[#272521]">
          {t("modal.title")}
        </h2>

        <div className="flex mb-4">
          <button
            className={`flex-1 border p-2 transition ${type === "pickup" ? "bg-[#F4F3EF] border-gray-400" : "hover:bg-gray-50"
              }`}
            onClick={() => dispatch(setModalType("pickup"))}
          >
            {t("modal.pickup")}
          </button>
          <button
            className={`flex-1 border p-2 transition ${type === "delivery" ? "bg-gray-100 border-gray-400" : "hover:bg-gray-50"
              }`}
            onClick={() => dispatch(setModalType("delivery"))}
          >
            {t("modal.delivery")}
          </button>
        </div>

        {type === "pickup" ? (
          <div className="space-y-3 flex flex-col gap-1">
            <p><strong>{t("modal.pickupAddress")}</strong></p>
            <p>{t("modal.addressValue")}</p>

            <p className="font-semibold">{t("modal.when")}</p>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="time"
                  defaultChecked
                  onChange={() => setIsActiveForm(false)}
                  className="w-4 h-4 accent-[#9B7B5C] border-gray-400 cursor-pointer"
                />
                <span className="text-gray-800 text-[15px]">{t("modal.upTo30")}</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="time"
                  onChange={() => setIsActiveForm(true)}
                  className="w-4 h-4 accent-[#9B7B5C] border-gray-400 cursor-pointer"
                />
                <span className="text-gray-800 text-[15px]">{t("modal.scheduleLater")}</span>
              </label>
            </div>


            {isActiveForm && (
              <div className="flex gap-4 justify-between items-start mt-3 py-4">
                {/* Date */}
                <div>
                  <span>{t("modal.date")}</span>
                  <div className="relative">
                    <button
                      onClick={() => {
                        setIsOpenDate(!isOpenDate);
                        setIsOpenTime(false);
                      }}
                      className="flex items-center justify-between w-[300px] bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50 transition"
                    >
                      <span>{selectedDate}</span>
                    </button>

                    {isOpenDate && (
                      <div className="absolute mt-2 w-[300px] bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        <ul className="flex flex-col text-gray-700">
                          {dateOptions.map((option) => (
                            <li
                              key={option}
                              onClick={() => {
                                setSelectedDate(option);
                                setIsOpenDate(false);
                              }}
                              className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${selectedDate === option ? "bg-gray-100 font-semibold" : ""
                                }`}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Time */}
                <div>
                  <span>{t("modal.time")}</span>
                  <div className="relative">
                    <button
                      onClick={() => {
                        setIsOpenTime(!isOpenTime);
                        setIsOpenDate(false);
                      }}
                      className="flex items-center justify-between w-[300px] bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50 transition"
                    >
                      <span>{selectedTime}</span>
                    </button>

                    {isOpenTime && (
                      <div className="absolute mt-2 w-[300px] bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        <ul className="flex flex-col text-gray-700">
                          {timeOptions.map((option) => (
                            <li
                              key={option}
                              onClick={() => {
                                setSelectedTime(option);
                                setIsOpenTime(false);
                              }}
                              className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${selectedTime === option ? "bg-gray-100 font-semibold" : ""
                                }`}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <p><strong>{t("modal.deliveryAddress")}</strong></p>
            <input
              type="text"
              placeholder={t("modal.deliveryPlaceholder")}
              className="w-full border p-2 rounded focus:outline-none focus:border-[#756F63]"
            />
          </div>
        )}

        <div className="flex justify-end mt-6 cursor-pointer">
          <button
            className="bg-[#756F63] text-white py-2 px-4 rounded hover:bg-[#5f574d] transition"
            onClick={closeWithFade}
          >
            {t("modal.save")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalBlock;
