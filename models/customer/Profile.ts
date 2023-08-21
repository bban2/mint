import {Gender} from "~/enums/gender";
import {CountryT} from "~/constants/countries";
import {Address} from "./Address";
import {SocialAccount} from "~/models/customer/SocialAccount";

export interface Profile {
    username: string,
    firstName: string,
    lastName: string,
    middleName: string,
    nickname: string,
    dateOfBirth: Date | string,
    gender: Gender,
    nationality: Pick<CountryT, 'nationality'>,
    email: string,
    phone: string,
    address: Address[],
    socialAccountLink: SocialAccount[]
}
