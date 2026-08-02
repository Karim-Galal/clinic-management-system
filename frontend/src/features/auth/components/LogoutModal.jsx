import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useAuthStore from "@/features/auth/store/authStore";

import Modal, {
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@/shared/components/Modal";

import Button from "@/shared/components/Button/Button";

function LogoutModal({
    open,
    onClose,
}) {

    const { t } = useTranslation();

    const navigate = useNavigate();

    const logout = useAuthStore(
        (state) => state.logout
    );

    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {

        setLoading(true);

        try {

            await logout();

            onClose();

            navigate("/staff/login", {
                replace: true,
            });

        } finally {

            setLoading(false);

        }

    };

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <ModalHeader>

                {t("auth:logout.title")}

            </ModalHeader>

            <ModalBody>

                <p className="text-muted-foreground">

                    {t("auth:logout.message")}

                </p>

            </ModalBody>

            <ModalFooter>

                <Button
                    variant="secondary"
                    onClick={onClose}
                    disabled={loading}
                >
                    {t("common:cancel")}
                </Button>

                <Button
                    variant="danger"
                    loading={loading}
                    loadingText={t("auth:logout.loading")}
                    onClick={handleLogout}
                >
                    {t("auth:logout.confirm")}
                </Button>

            </ModalFooter>
        </Modal>
    );
}

export default LogoutModal;