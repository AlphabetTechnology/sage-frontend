"use client";
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Avatar,
    Grid,
    Card,
    CardContent,
    IconButton,
    Tooltip,
    Pagination,
} from '@mui/material';
import {
    Star,
    StarHalf,
    StarOutline,
    Share,
    ThumbUp,
    ThumbDown,
} from '@mui/icons-material';

// Dummy review data
const reviews = [
    {
        reviewerName: 'John Doe',
        reviewerImage: '',
        rating: 4.5,
        comment: 'This course was really helpful and well-structured.',
        date: 'Dec 10, 2024',
    },
    {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    },
    {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    },
    {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    },
    {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    },
    {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    },
    {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    },
    {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    },
    {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    },
    {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    },
    {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    }, {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    },
    {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    }, {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    }, {
        reviewerName: 'Jane Smith',
        reviewerImage: '',
        rating: 4,
        comment: 'Great content and explanation. Highly recommended!',
        date: 'Dec 8, 2024',
    },

];

// Helper function to render star icons
const getStarIcons = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<Star key={i} sx={{ color: '#FFD700' }} />);
        } else if (rating > i - 1) {
            stars.push(<StarHalf key={i} sx={{ color: '#FFD700' }} />);
        } else {
            stars.push(<StarOutline key={i} sx={{ color: '#E0E0E0' }} />);
        }
    }
    return stars;
};

const LearnerReviews = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 3; // Number of reviews to show per page

    // Calculate the reviews to display
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const displayedReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

    // Handle pagination change
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <section>
            <div className="container mx-auto">
                <Box
                    sx={{
                        p: 4,
                        maxWidth: { xs: '100%', md: '60%' },
                        mx: 'auto',
                    }}
                >
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                        textAlign="center"
                        mb={3}
                    >
                        Learner Reviews
                    </Typography>

                    {/* Overall Rating Section */}
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mb={4}
                        gap={2}
                    >
                        <Typography variant="h3" color="primary">
                            4.7
                        </Typography>
                        <Box display="flex">{getStarIcons(4.7)}</Box>
                        <Typography variant="body1" color="textSecondary">
                            224 Reviews
                        </Typography>
                    </Box>

                    {/* Individual Reviews */}
                    <Grid container spacing={3}>
                        {displayedReviews.map((review, index) => (
                            <Grid item xs={12} key={index}>
                                <Card
                                    sx={{
                                        boxShadow: 'none',
                                        borderBottom: '1px solid #ddd',
                                    }}
                                >
                                    <CardContent>
                                        <Box display="flex" alignItems="center" mb={2}>
                                            <Avatar
                                                src={
                                                    review.reviewerImage ||
                                                    '/default-avatar.png'
                                                }
                                                alt={review.reviewerName}
                                                sx={{ width: 56, height: 56, mr: 2 }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="subtitle1"
                                                    fontWeight="bold"
                                                >
                                                    {review.reviewerName}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                >
                                                    {review.date}
                                                </Typography>
                                                <Box display="flex">
                                                    {getStarIcons(review.rating)}
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            mb={2}
                                        >
                                            {review.comment}
                                        </Typography>

                                        {/* Footer with Options */}
                                        <Box
                                            display="flex"
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                                gap={1}
                                            >
                                                <Tooltip title="Was this review helpful?">
                                                    <Typography
                                                        variant="body2"
                                                        color="textSecondary"
                                                    >
                                                        Was this review helpful?
                                                    </Typography>
                                                </Tooltip>
                                                <IconButton
                                                    size="small"
                                                    color="primary"
                                                >
                                                    <ThumbUp fontSize="small" />
                                                </IconButton>
                                                <IconButton
                                                    size="small"
                                                    color="error"
                                                >
                                                    <ThumbDown fontSize="small" />
                                                </IconButton>
                                            </Box>

                                            <Tooltip title="Share">
                                                <IconButton
                                                    size="small"
                                                    color="secondary"
                                                >
                                                    <Share />
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Pagination Component */}
                    <Box mt={4} display="flex" justifyContent="center">
                        <Pagination
                            count={Math.ceil(reviews.length / reviewsPerPage)} // Total number of pages
                            page={currentPage} // Current page
                            onChange={handlePageChange} // Handle page change
                            color="primary"
                        />
                    </Box>
                </Box>
            </div>
        </section>
    );
};

export default LearnerReviews;
