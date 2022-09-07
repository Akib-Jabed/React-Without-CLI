import { Company } from "./classes/Company";
import { CustomMap } from "./classes/CustomMap";
import { User } from "./classes/User";

let user = new User();
let company = new Company();
let customMap = new CustomMap();

customMap.addMarker(user);
customMap.addMarker(company);
