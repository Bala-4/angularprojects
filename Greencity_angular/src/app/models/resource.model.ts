// Based on ResourceResponseDto and ResourceUsageResponseDto
export interface Resource {
  resourceId: number;
  projectId: number;
  type: string;
  location: string;
  capacity: number;
  status: string;
}

export interface ResourceUsage {
  usageId: number;
  resourceId: number;
  quantity: number;
  date: string;
  status: string;
}

// UI-specific model for the Dashboard widgets in image_938fc0.png
export interface DashboardStats {
  totalResources: number;
  waterCapacityPercent: number;
  energyUsagePercent: number;
  wasteCollected: string;
} 
/** RESOURCE MODELS **/

export interface ResourceResponse {
  resourceId: number;
  projectId: number;
  type: string;
  location: string;
  capacity: number;
  status: string;
}

export interface ResourceCreateRequest {
  projectId: number;
  type: string;
  location: string;
  capacity: number;
  status: string;
}

export interface ResourceUpdateRequest {
  type?: string;
  location?: string;
  capacity?: number;
  status?: string;
}

/** USAGE MODELS **/

export interface ResourceUsageResponse {
  usageId: number;
  resourceId: number;
  quantity: number;
  date: string; // LocalDateTime from backend
  status: string;
}

export interface ResourceUsageCreateRequest {
  quantity: number;
  status: string;
}

export interface ResourceUsageUpdateRequest {
  quantity?: number;
  status?: string;
}