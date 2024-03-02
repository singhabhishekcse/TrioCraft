// src/components/UserForm.tsx
import React, { useState, useEffect } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: localStorage.getItem('name') || '',
    address: localStorage.getItem('address') || '',
    email: localStorage.getItem('email') || '',
    phone: localStorage.getItem('phone') || '',
  });
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    // Check for unsaved changes
    const hasChanges = Object.values(formData).some((value) => value !== '');
    setUnsavedChanges(hasChanges);
  }, [formData]);

  useEffect(() => {
    // Set up the beforeunload event listener
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        const message = 'You have unsaved changes. Are you sure you want to leave?';
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Save data to localStorage
    Object.keys(formData).forEach((key) => {
      localStorage.setItem(key, formData[key]);
    });
    setUnsavedChanges(false); // Reset unsaved changes after submitting
    console.log('User Data:', formData);
  };

  return (
    <Box
      p={4}
      maxW="400px"
      mx="auto"
      mt="10%"
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
      boxShadow="md"
    >
      <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} mb={2} />
      <Input
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        mb={2}
      />
      <Input
        name="email"
        placeholder="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        mb={2}
      />
      <Input
        name="phone"
        placeholder="Phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        mb={2}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      {unsavedChanges && <p>Unsaved changes! Make sure to submit your changes before leaving.</p>}
    </Box>
  );
};

export default UserForm;
