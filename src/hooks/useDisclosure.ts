import { useState } from 'react';

type DisclosureProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

export default function useDisclosure(defaultOpen = false): DisclosureProps {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const onOpen = () => setIsOpen(true);

  const onClose = () => setIsOpen(false);

  const onToggle = () => setIsOpen(!isOpen);

  return { isOpen, onOpen, onClose, onToggle };
}
