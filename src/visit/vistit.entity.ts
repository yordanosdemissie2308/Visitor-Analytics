import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Visit {
@PrimaryGeneratedColumn()
id: number;


@Column()
ip: string;


@Column()
endpoint: string;


@Column({ name: 'user_agent' })
userAgent: string;


@Column({ type: 'timestamp' })
visitTime: Date;
}