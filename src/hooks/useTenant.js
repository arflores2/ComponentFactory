import { getTenant } from '../services/tenant.service';

export const useTenant = () => {
  return getTenant();
};
