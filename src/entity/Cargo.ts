import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Cargo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "cargo_type"})
    cargoType: string;

    @Column({name: "cargo_weight"})
    cargoWeight: number;

    @Column({name: "cargo_dimensions"})
    cargoDimensions: string;

    @Column({name: "disclaimer_flag"})
    disclaimerFlag: boolean;

    @Column({name: "hazard_flag"})
    hazardFlag: boolean;

    @Column({name: "insurance_flag"})
    insuranceFlag: boolean;

    @Column({name: "ship_to_name"})
    shipToName: string;

    @Column({name: "ship_to_contact"})
    shipToContact: string;

    @Column({name: "ship_to_add_1"})
    shipToAdd1: string;

    @Column({name: "ship_to_add_2"})
    shipToAdd2: string;

    @Column({name: "ship_to_state"})
    shipToState: string;

    @Column({name: "ship_to_postcode"})
    shipToPostcode: number;

    @Column({name: "ship_to_country"})
    shipToCountry: string;

    @Column({name: "ship_from_name"})
    shipFromName: string;

    @Column({name: "ship_from_contact"})
    shipFromContact: string;

    @Column({name: "ship_from_add_1"})
    shipFromAdd1: string;

    @Column({name: "ship_from_add_2"})
    shipFromAdd2: string;

    @Column({name: "ship_from_state"})
    shipFromState: string;

    @Column({name: "ship_from_postcode"})
    shipFromPostcode: number;

    @Column({name: "ship_from_country"})
    shipFromCountry: string;

    @Column({name: "shipping_package"})
    shippingPackage: string;
}
