import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../services/resource';
import {
  ResourceResponse, 
  ResourceUsageResponse, 
  DashboardStats,
  ResourceCreateRequest,
  ResourceUsageCreateRequest
} from '../../models/resource.model';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-resource-dashboard',
  templateUrl: './resource-dashboard.html',
  styleUrls: ['./resource-dashboard.css'],
  standalone:true,
  imports:[CommonModule,NgFor,NgIf,NgClass,FormsModule]
})
export class ResourceDashboardComponent implements OnInit {
  // Data Arrays
  resources: ResourceResponse[] = [];
  filteredResources: ResourceResponse[] = [];
  selectedResourceUsages: ResourceUsageResponse[] = [];

  // State Management
  loading: boolean = false;
  selectedResourceId: number | null = null;
  searchTerm: string = '';
  
  // Dashboard KPIs (as seen in image_938fc0.png)
  stats: DashboardStats = {
    totalResources: 0,
    waterCapacityPercent: 0,
    energyUsagePercent: 0,
    wasteCollected: '0T'
  };

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.loadInitialData();
  }

  /** 1. RESOURCE MANAGEMENT **/

  loadInitialData(): void {
    this.loading = true;
    this.resourceService.listResources().subscribe({
      next: (data) => {
        this.resources = data;
        this.filteredResources = data;
        this.calculateStats();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching resources:', err);
        this.loading = false;
      }
    });
  }

  // Feature: Search/Filter (Matches "SEARCH" bar in image_938fc0.png)
  onSearch(): void {
    this.filteredResources = this.resources.filter(res => 
      res.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      res.location.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Uses: POST /api/resources
  addNewResource(newRes: ResourceCreateRequest): void {
    this.resourceService.createResource(newRes).subscribe(() => {
      this.loadInitialData(); // Refresh list
    });
  }

  // Uses: DELETE /api/resources/{id}
  deleteResource(id: number): void {
    if (confirm('Are you sure you want to delete this resource?')) {
      this.resourceService.deleteResource(id).subscribe(() => {
        this.resources = this.resources.filter(r => r.resourceId !== id);
        this.onSearch();
      });
    }
  }

  /** 2. USAGE TRACKING **/

  // Uses: GET /api/resources/{id}/usages
  viewUsages(resourceId: number): void {
    this.selectedResourceId = resourceId;
    this.resourceService.listUsages(resourceId).subscribe(usages => {
      this.selectedResourceUsages = usages;
    });
  }

  // Uses: POST /api/resources/{id}/usages
  logUsage(usage: ResourceUsageCreateRequest): void {
    if (this.selectedResourceId) {
      this.resourceService.createUsage(this.selectedResourceId, usage).subscribe(() => {
        this.viewUsages(this.selectedResourceId!); // Refresh usage list
      });
    }
  }

  // Uses: DELETE /api/resources/usages/{usageId}
  removeUsage(usageId: number): void {
    this.resourceService.deleteUsage(usageId).subscribe(() => {
      this.selectedResourceUsages = this.selectedResourceUsages.filter(u => u.usageId !== usageId);
    });
  }

  /** 3. UTILITY FUNCTIONS **/

  calculateStats(): void {
    this.stats.totalResources = this.resources.length;
    // Example logic for water/energy metrics seen in wireframe
    const waterRes = this.resources.find(r => r.type.toLowerCase() === 'water');
    this.stats.waterCapacityPercent = waterRes ? waterRes.capacity : 0;
  }

  exportReport(): void {
    console.log("Generating CSV report for resources...");
    // Integration logic for report export would go here
  }
}