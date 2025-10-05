import React from "react";
import { ModalOverlay, ModalContent, ModalCloseButton, ModalImage, ModalTitle, ModalDescription, ModalTechStack, ModalTechTag, ModalActions, ModalButton } from "./Modal.styles";

export interface ProjectModalData {
  title: string;
  description: string;
  tech: string[];
  link: string;
  imageUrl?: string;
  roles?: string[];
  achievements?: string[];
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectModalData | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalCloseButton onClick={onClose}>×</ModalCloseButton>
        {project.imageUrl && (
          <ModalImage>
            <img src={project.imageUrl} alt={project.title} />
          </ModalImage>
        )}
        <ModalTitle>{project.title}</ModalTitle>
        <ModalDescription>{project.description}</ModalDescription>
        <ModalTechStack>
          {project.tech.map((tech, techIndex) => (
            <ModalTechTag key={techIndex}>{tech}</ModalTechTag>
          ))}
        </ModalTechStack>
        <ModalActions>
          <ModalButton href={project.link} target="_blank" rel="noopener noreferrer">
            프로젝트 보기
          </ModalButton>
        </ModalActions>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
