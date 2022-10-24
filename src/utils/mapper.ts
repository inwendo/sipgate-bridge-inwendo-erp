import {
  Contact,
  PhoneNumber,
  PhoneNumberLabel,
} from "@sipgate/integration-bridge";

export const convertToClinqContact = (iwContact: any): Contact => {
  const phoneNumbers: PhoneNumber[] = [];

  if (iwContact.phoneNumbers) {
    iwContact.phoneNumbers.forEach((phoneNumber: any) => {
      phoneNumbers.push({
        label: phoneNumber.label,
        phoneNumber: phoneNumber.phoneNumber,
      });
    });
  }

  return {
    id: iwContact.id,
    name: iwContact.name,
    firstName: iwContact.firstName,
    lastName: iwContact.lastName,
    organization: iwContact.organization,
    contactUrl: iwContact.contactUrl,
    avatarUrl: iwContact.avatarUrl,
    email: iwContact.email,
    phoneNumbers,
    readonly: true,
  };
};
