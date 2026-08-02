import { useRef } from "react";
import { createPortal } from "react-dom";

import useEscapeKey from "@/shared/hooks/useEscapeKey";
import useClickOutside from "@/shared/hooks/useClickOutside";
import useLockBodyScroll from "@/shared/hooks/useLockBodyScroll";

import ModalOverlay from "./ModalOverlay";
import ModalContent from "./ModalContent";

function Modal({
    open,
    onClose,
    children,
    className = "",
}) {
    const modalRef = useRef(null);

    useEscapeKey(open, onClose);

    useClickOutside(
        modalRef,
        open,
        onClose
    );

    useLockBodyScroll(open);

    if (!open) return null;

    return createPortal(
        <ModalOverlay onClick={onClose}>
            <ModalContent
                ref={modalRef}
                className={className}
            >
                {children}
            </ModalContent>
        </ModalOverlay>,
        document.body
    );
}

export default Modal;