import React, { useState, useEffect } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalImage,
  ModalTitle,
  ModalDescription,
  ModalTechStack,
  ModalTechTag,
  ModalActions,
  ModalButton,
  ModalSectionTitle,
  ModalFeatureList,
  ModalFeatureItem,
  ModalImageGallery,
  ModalImageContainer,
  ModalImageNavigation,
  ModalNavButton,
  ModalImageCounter,
  ImageModalOverlay,
  ImageModalContent,
  ImageModalImage,
  ImageModalCloseButton,
  ModalGalleryImage,
} from "./Modal.styles";

export interface ProjectModalData {
  title: string;
  description: string;
  tech: string[];
  link: string;
  imageUrl?: string;
  images?: string[];
  roles?: string[];
  achievements?: string[];
  keyFeatures?: string[];
  reflection: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectModalData | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (project?.images && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <>
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

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <>
              <ModalSectionTitle>Key Features</ModalSectionTitle>
              <ModalFeatureList>
                {project.keyFeatures.map((feature, featureIndex) => (
                  <ModalFeatureItem key={featureIndex}>{feature}</ModalFeatureItem>
                ))}
              </ModalFeatureList>
            </>
          )}

          <ModalSectionTitle>Tech Stack</ModalSectionTitle>
          <ModalTechStack>
            {project.tech.map((tech, techIndex) => (
              <ModalTechTag key={techIndex}>{tech}</ModalTechTag>
            ))}
          </ModalTechStack>

          {project.images && project.images.length > 0 && (
            <>
              <ModalSectionTitle>Project Images</ModalSectionTitle>
              <ModalImageGallery>
                <ModalImageContainer>
                  <ModalGalleryImage
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    onClick={() => openImageModal(project.images![currentImageIndex])}
                  />
                </ModalImageContainer>
                <ModalImageNavigation>
                  <ModalNavButton onClick={prevImage} disabled={currentImageIndex === 0}>
                    ‹
                  </ModalNavButton>
                  <ModalImageCounter>
                    {currentImageIndex + 1} / {project.images.length}
                  </ModalImageCounter>
                  <ModalNavButton onClick={nextImage} disabled={currentImageIndex === project.images.length - 1}>
                    ›
                  </ModalNavButton>
                </ModalImageNavigation>
              </ModalImageGallery>
            </>
          )}

          <ModalSectionTitle>Reflection</ModalSectionTitle>
          <ModalDescription>{project.reflection}</ModalDescription>
        </ModalContent>
      </ModalOverlay>

      {selectedImage && (
        <ImageModalOverlay onClick={closeImageModal}>
          <ImageModalContent onClick={(e) => e.stopPropagation()}>
            <ImageModalCloseButton onClick={closeImageModal}>×</ImageModalCloseButton>
            <ImageModalImage src={selectedImage} alt="Enlarged project image" />
          </ImageModalContent>
        </ImageModalOverlay>
      )}
    </>
  );
};

export default Modal;
