import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  seriesList: string[]=[]; // The full list of series
  filteredSeriesList: string[]=[]; //The list to display, filtered by the search term
  addSeries(): void
  {
    const inputElement=document.getElementById('seriesInput') as HTMLInputElement;
    const seriesName=inputElement?.value.trim();
    if(seriesName && !this.seriesList.includes(seriesName))
    {
      this.seriesList.push(seriesName);
      this.filteredSeriesList=[...this.seriesList];
      localStorage.setItem('seriesList',JSON.stringify(this.seriesList));
      inputElement.value='';
    }
    else if(this.seriesList.includes(seriesName))
    {
      alert('Series already added');
    }
  }
  searchSeries(event: Event): void
  {
    const searchTerm=(event.target as HTMLInputElement).value.toLowerCase();
    this.filteredSeriesList=this.seriesList.filter(series=>
      series.toLowerCase().includes(searchTerm)
    );

  }
  sortAlphabetically(): void
  {
    this.seriesList.sort((a,b)=>a.localeCompare(b));
    this.filteredSeriesList=[...this.seriesList];
  }
}
