import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatButtonModule } from '@angular/material/button'; 
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatExpansionModule } from '@angular/material/expansion'; 
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs'; 

// Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSliderModule,
    MatSidenavModule,
    MatStepperModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTabsModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    DragDropModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSliderModule,
    MatSidenavModule,
    MatStepperModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTabsModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }