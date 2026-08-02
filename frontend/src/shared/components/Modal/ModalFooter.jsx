function ModalFooter({ children }) {
    return (
        <div className="flex justify-end gap-3 border-t border-border px-6 py-4">
            {children}
        </div>
    );
}

export default ModalFooter;