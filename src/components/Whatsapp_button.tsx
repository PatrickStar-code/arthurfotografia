import { BsWhatsapp } from "react-icons/bs";

export function Whatsapp_button() {
  return (
    <a href="https://wa.me/message/ZZKOBVSCQXCHN1" target="_blank">
      <div
        className="animate-bounce fixed bottom-5 right-5 z-50 flex w-16 h-16 items-center justify-center rounded-full bg-green-500 text-white"
        id="whatsapp-button"
      >
        <BsWhatsapp size={40} />
      </div>
    </a>
  );
}
