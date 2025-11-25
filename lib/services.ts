import { serviceData } from "@/data/Services";
import { ServiceInfo } from "@/types/service";

export function getAllServices() {
  const services: Array<{
    category: string;
    service: string;
    data: ServiceInfo;
  }> = [];

  Object.entries(serviceData).forEach(([category, categoryServices]) => {
    Object.entries(categoryServices).forEach(([service, serviceInfo]) => {
      services.push({
        category,
        service,
        data: serviceInfo as ServiceInfo,
      });
    });
  });

  return services;
}

export function getServicesByCategory(category: string) {
  const categoryData = serviceData[category];
  if (!categoryData) return [];

  return Object.entries(categoryData).map(([service, serviceInfo]) => ({
    service,
    data: serviceInfo as ServiceInfo,
  }));
}

export function getCategoryNames() {
  return Object.keys(serviceData);
}
