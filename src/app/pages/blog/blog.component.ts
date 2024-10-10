import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlogPost } from '../../../types';
import { BlogCardComponent } from "../../components/blog-card/blog-card.component";
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { CommonModule } from '@angular/common';
// register Swiper custom elements
register();

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    BlogCardComponent,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  selectedPost: any = null;

  posts: BlogPost[] = [
    {
      id: 1,
      title: '5 Essential Wardrobe Staples',
      description: 'Discover the must-have pieces that form the foundation of a versatile and stylish wardrobe.',
      imageUrl: 'assets/img-blog/1.jpg',
      link: '/blog/post1',
    },
    {
      id: 2,
      title: 'How to Style Denim: Tips and Tricks',
      description: 'Learn how to elevate your denim outfits with these simple styling tips and tricks.',
      imageUrl: 'assets/img-blog/2.jpg',
      link: '/blog/post2',
    },
    {
      id: 3,
      title: 'The Best Fabrics for Summer Fashion',
      description: 'Stay cool and stylish this summer with our guide to the best breathable fabrics.',
      imageUrl: 'assets/img-blog/3.jpg',
      link: '/blog/post3',
    },
    {
      id: 4,
      title: 'Sustainable Fashion: How to Shop Responsibly',
      description: 'Explore the principles of sustainable fashion and tips for making responsible shopping choices.',
      imageUrl: 'assets/img-blog/4.jpg',
      link: '/blog/post4',
    },
    {
      id: 5,
      title: 'Accessorizing Your Outfits: A Complete Guide',
      description: 'Master the art of accessorizing to enhance any outfit with our comprehensive guide.',
      imageUrl: 'assets/img-blog/5.jpg',
      link: '/blog/post5',
    },
    {
      id: 6,
      title: 'Trends to Watch in Fashion for 2024',
      description: 'Get ahead of the curve with our insights into the top fashion trends for the upcoming year.',
      imageUrl: 'assets/img-blog/6.jpg',
      link: '/blog/post6',
    },
  ];

  showPostDetails(post: any): void {
    this.selectedPost = post; 
  }

  closePostDetails(): void {
    this.selectedPost = null; 
  }
}
