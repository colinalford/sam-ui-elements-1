import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SamFormControlsModule } from '../form-controls';
import { SamDirectivesModule } from '../directives';
import { SamElementsModule } from '../elements';

import { AccordionsModule } from './accordion';
import { SamAlertModule } from './alert';
import { SamAlertFooterModule } from './alert-footer';
import { SamBadgeModule } from './badge';
import { SamBannerModule } from './banner';
import { SamBreadcrumbsModule } from './breadcrumbs';
import { SamDownloadModule } from './download';
import { SamHeaderModule } from './header';
import { SamHistoryModule } from './history';
import { SamModalModule } from './modal';
import { SamMultiSelectDropdownModule } from './multiselect-dropdown';
import { SamPaginationModule } from './pagination';
import { SamPipesModule } from '../pipes';
import { SamPointOfContactModule } from './point-of-contact';
import { SamProgressModule } from './progress-bar';
import { SamSidenavModule } from './sidenav';
import { SamSpinnerModule } from './spinner';
import { SamTabsModule } from './tabs';
import { SamWrapperModule } from '../wrappers';
import { SamCommentsModule } from './comments';
import { SamImageModule } from './image';
import { SamActionButtonModule } from './actions/action-button';
import { SamActionDropdownModule } from './actions/actions-dropdown';
import { SamDataTableModule } from './data-table';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    SamFormControlsModule,
    SamDirectivesModule,
    SamElementsModule,
    AccordionsModule,
    SamPipesModule,
    SamSidenavModule,
    SamWrapperModule,
    SamCommentsModule,
    SamImageModule,
    SamDataTableModule,
    SamBannerModule,
    SamHeaderModule,
    SamModalModule,
    SamBreadcrumbsModule,
    SamProgressModule,
    SamActionButtonModule,
    SamActionDropdownModule,
    SamAlertModule,
    SamAlertFooterModule,
    SamBadgeModule,
    SamDownloadModule,
    SamHistoryModule,
    SamMultiSelectDropdownModule,
    SamPaginationModule,
    SamPointOfContactModule,
    SamSpinnerModule,
    SamTabsModule,
  ],
  declarations: [
    
  ],
  exports: [
    SamActionButtonModule,
    SamActionDropdownModule,
    SamAlertModule,
    SamAlertFooterModule,
    SamBadgeModule,
    SamBannerModule,
    SamBreadcrumbsModule,
    SamDownloadModule,
    SamHeaderModule,
    SamHistoryModule,
    SamModalModule,
    SamMultiSelectDropdownModule,
    SamPaginationModule,
    SamPointOfContactModule,
    SamProgressModule,
    SamSidenavModule,
    SamSpinnerModule,
    SamTabsModule,
    AccordionsModule,
    SamCommentsModule,
    SamImageModule,
    SamDataTableModule,
  ]
})
export class SamComponentsModule {}
