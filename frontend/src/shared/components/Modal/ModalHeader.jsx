function ModalHeader({ children }) {
    return (
        <div className="border-b border-border px-6 py-4">
            <h2 className="text-lg font-semibold text-foreground">
                {children}
            </h2>
        </div>
    );
}

export default ModalHeader;