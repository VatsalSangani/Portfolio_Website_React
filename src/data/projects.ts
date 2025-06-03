import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Healthcare Chatbot using LLM',
    description: 'Using BART LLM and publicly available datasets on medical domain, a medical chatbot is created for basic Information Extraction and Question Answering..',
    longDescription: 'Wise Well is an AI-powered healthcare chatbot built using the BioBART v2 NLP model, fine-tuned for biomedical applications. It handles tasks like question answering, summarization, entity linking, and named entity recognition. The system ensures accurate, context-aware responses to medical queries and is designed for scalability and reliability. Due to high resource requirements, the main model is not deployed online. Instead, a lite version—featuring an improved RAG (Retrieval-Augmented Generation) pipeline with a general-purpose language model—is available as a demo. While it lacks medical domain specificity, it effectively demonstrates my full-stack development capabilities, including backend API integration and frontend chatbot design.',
    image: 'https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'PyTorch', 'Tensorflow', 'FastAPI', 'CUDA', 'LLM', 'BioBART', 'JavaScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/VatsalSangani/wisewellchatbot',
    demoLink: 'https://wisewellchatbot.vatsalsangani.in/',
    featured: true
  },
  {
    id: '2',
    title: 'Football Analysis using SQL and Python',
    description: 'Interactive dashboard visualizing historical match data.',
    longDescription: 'This project explores football team performance using historical match data to uncover strategy-impact relationships. It examines how tactical elements like Build-Up Play Speed and Defence Pressure affect match outcomes. The process includes extensive data preprocessing, feature engineering, and insightful visualizations. The goal is to evaluate and interpret team strategies for performance optimization and tactical planning.',
    image: 'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Sqlite3', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly'],
    githubLink: 'https://github.com/VatsalSangani/SQL_Football_Analysis',
    featured: false
  },
  {
    id: '3',
    title: 'Prediction of Protein Expression using Machine Learning',
    description: 'Machine learning model to predict protein expression in bilogical tissue images.',
    longDescription: 'This project aims to predict protein expression levels using advanced machine learning algorithms applied to bioinformatics datasets from platforms like Kaggle. It involves comprehensive data preprocessing, model training, and evaluation to uncover hidden patterns in biological data. The objective is to enhance prediction accuracy for real-world applications in biotechnology and healthcare. With relevance to pharmaceuticals and medical research, the project contributes meaningfully to protein analytics and bioinformatics innovation.',
    image: 'https://images.pexels.com/photos/11198494/pexels-photo-11198494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Scikit-learn', 'PyTorch', 'CNN', 'LSTM', 'skimage', 'NumPy', 'pandas'],
    githubLink: 'https://github.com/VatsalSangani/Protein_Expression_Prediction',
    featured: false
  },
  {
    id: '4',
    title: 'Movie Recommendation System using Data Analysis and Visualization',
    description: 'A system to detect any inflated star ratings and reviews by aggregating data from multiple movie rating sites.',
    longDescription: 'This project analyzes movie ratings across multiple platforms to uncover inconsistencies, biases, and rating trends among different user bases. By aggregating and comparing data from sources like IMDb, Rotten Tomatoes, and Metacritic, it identifies how platform-specific factors affect user perception. The analysis includes data cleaning, visualization, and statistical evaluation to highlight rating patterns. Insights gained can inform better recommendation systems and media evaluation strategies.',
    image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter Notebook'],
    githubLink: 'https://github.com/VatsalSangani/Movie_reccomendation_analysis',
    featured: false
  },
  {
    id: '5',
    title: 'Sentiment Analysis Tool',
    description: 'A Python-based sentiment analysis tool for analyzing social media trends, using NLP techniques and data visualization libraries.',
    longDescription: 'This project implements machine learning and deep learning models to classify tweets as positive, negative, or neutral. It leverages GloVe word embeddings and neural networks to understand the context and sentiment behind social media text. The pipeline includes data preprocessing, tokenization, and model evaluation to ensure high accuracy.',
    image: 'https://images.pexels.com/photos/31450274/pexels-photo-31450274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'NLP', 'BERT', 'Transformers', 'NLTK', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook'],
    githubLink: 'https://github.com/VatsalSangani/Sentiment_Analysis_of_Tweets',
    featured: false
  },
  {
    id: '6',
    title: 'Credit Risk Modelling Systems',
    description: 'A system trained on multiple credit risk factors, evaluated on Machine Learning and Deep Learning models.',
    longDescription: 'This project builds a predictive model to assess credit risk by analyzing applicant data such as income, credit history, and loan attributes. Using machine learning and deep learning techniques, it classifies the likelihood of loan default with high accuracy. The workflow includes feature engineering, model training, and performance evaluation. This solution helps financial institutions make data-driven lending decisions and minimize risk exposure.',
    image: 'https://images.pexels.com/photos/19867471/pexels-photo-19867471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Tensorflow', 'PyTorch', 'Jupyter Notebook', 'SVM', 'Random Forest', 'XGBoost', 'Logistic Regression', 'Max ENT', 'Naive Bayes', 'LSTM'],
    githubLink: 'https://github.com/VatsalSangani/Credit_Risk_Modelling',
    featured: true
  }
];