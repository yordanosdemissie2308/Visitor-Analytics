import axios from 'axios';
import { Injectable } from '@nestjs/common';


@Injectable()
export class GeoService {
async lookup(ip: string) {
try {
const res = await axios.get(`https://ipapi.co/${ip}/json/`);
return res.data;
} catch (e) {
return null;
}
}
}