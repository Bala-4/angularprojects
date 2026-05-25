import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  ResourceResponse, ResourceCreateRequest, ResourceUpdateRequest,
  ResourceUsageResponse, ResourceUsageCreateRequest, ResourceUsageUpdateRequest 
} from '../models/resource.model'

@Injectable({ providedIn: 'root' })
export class ResourceService {
  private readonly API_URL = 'http://localhost:8080/api/resources';

  constructor(private http: HttpClient) {}

  /** RESOURCE ENDPOINTS **/

  // GET /api/resources
  listResources(projectId?: number): Observable<ResourceResponse[]> {
    let params = new HttpParams();
    if (projectId) params = params.set('projectId', projectId.toString());
    return this.http.get<ResourceResponse[]>(this.API_URL, { params });
  }

  // GET /api/resources/{resourceId}
  getResource(resourceId: number): Observable<ResourceResponse> {
    return this.http.get<ResourceResponse>(`${this.API_URL}/${resourceId}`);
  }

  // GET /api/resources/{resourceId}/exists
  resourceExists(resourceId: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.API_URL}/${resourceId}/exists`);
  }

  // POST /api/resources
  createResource(request: ResourceCreateRequest): Observable<ResourceResponse> {
    return this.http.post<ResourceResponse>(this.API_URL, request);
  }

  // PUT /api/resources/{resourceId}
  updateResource(resourceId: number, request: ResourceUpdateRequest): Observable<ResourceResponse> {
    return this.http.put<ResourceResponse>(`${this.API_URL}/${resourceId}`, request);
  }

  // DELETE /api/resources/{resourceId}
  deleteResource(resourceId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${resourceId}`);
  }

  /** RESOURCE USAGE ENDPOINTS **/

  // GET /api/resources/{resourceId}/usages
  listUsages(resourceId: number): Observable<ResourceUsageResponse[]> {
    return this.http.get<ResourceUsageResponse[]>(`${this.API_URL}/${resourceId}/usages`);
  }

  // POST /api/resources/{resourceId}/usages
  createUsage(resourceId: number, request: ResourceUsageCreateRequest): Observable<ResourceUsageResponse> {
    return this.http.post<ResourceUsageResponse>(`${this.API_URL}/${resourceId}/usages`, request);
  }

  // GET /api/resources/usages/{usageId}
  getUsage(usageId: number): Observable<ResourceUsageResponse> {
    return this.http.get<ResourceUsageResponse>(`${this.API_URL}/usages/${usageId}`);
  }

  // PUT /api/resources/usages/{usageId}
  updateUsage(usageId: number, request: ResourceUsageUpdateRequest): Observable<ResourceUsageResponse> {
    return this.http.put<ResourceUsageResponse>(`${this.API_URL}/usages/${usageId}`, request);
  }

  // DELETE /api/resources/usages/{usageId}
  deleteUsage(usageId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/usages/${usageId}`);
  }
}