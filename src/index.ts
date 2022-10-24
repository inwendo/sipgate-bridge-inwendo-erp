import { Adapter, Config, Contact, start } from "@sipgate/integration-bridge";
import axios from "axios";
import { convertToClinqContact } from "./utils";

class IwErpAdapter implements Adapter {
  /**
   * Fetch contacts from the contacts provider using config.apiKey and config.apiUrl or throw on error
   */
  /* eslint-disable @typescript-eslint/no-unused-vars */
  public async getContacts(config: Config): Promise<Contact[]> {
    const { data, status } = await axios.get(
      config.apiUrl +
        "/api/dw/export/json/iw-crm-contact-data-sipgate-json-list",
      {
        headers: {
          Accept: "application/json",
          "x-iw-jwt-token": config.apiKey,
        },
      }
    );

    const contacts = data.map((iwContact: any) =>
      convertToClinqContact(iwContact)
    );
    return contacts;
  }
}

start(new IwErpAdapter());
