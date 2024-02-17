import session from "express-session";
import KeycloakConnect from "keycloak-connect";

export const memoryStore = new session.MemoryStore();

export const config: KeycloakConnect.KeycloakConfig = {
	"realm": "master",
	"auth-server-url": "http://localhost:8080/auth/",
	"ssl-required": "external",
	"resource": "admin",
	// "credentials": {
	// 	"secret": "rwMFD4CuRVKOtGShOxnsJMOSKakumbIy"
	// },
	"confidential-port": 0
}

const keycloak = new KeycloakConnect({ store: memoryStore }, config);

export default keycloak;
