function ModalOverlay({ children, onClick }) {
    return (
        <div
            onClick={onClick}
            className="
                fixed inset-0 z-50
                flex items-center justify-center
                bg-black/50
                backdrop-blur-sm
                p-4
            "
        >
            {children}
        </div>
    );
}

export default ModalOverlay;