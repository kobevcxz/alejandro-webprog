import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';

const blankForm = {
  slug: '',
  title: '',
  paragraphs: '',
  preview: '',
  isActive: true,
};

const initialArticles = [
  {
    id: 1,
    slug: 'naruto-uzumaki',
    title: 'Naruto Uzumaki Journey',
    paragraphs: '4',
    preview: 'Naruto Uzumaki is a ninja from the Hidden Leaf Village who dreams of becoming Hokage.',
    isActive: true,
  },
  {
    id: 2,
    slug: 'luffy-one-piece',
    title: 'Monkey D. Luffy Adventure',
    paragraphs: '4',
    preview: 'Luffy is a pirate who wants to become the King of the Pirates.',
    isActive: true,
  },
  {
    id: 3,
    slug: 'eren-yeager',
    title: 'Eren Yeager and the Titans',
    paragraphs: '4',
    preview: 'Eren Yeager lives in a world where humanity is threatened by Titans.',
    isActive: true,
  },
  {
    id: 4,
    slug: 'tanjiro-kamado',
    title: 'Tanjiro the Demon Slayer',
    paragraphs: '4',
    preview: 'Tanjiro becomes a demon slayer after his family is killed by demons.',
    isActive: true,
  },
  {
    id: 5,
    slug: 'gojo-satoru',
    title: 'Gojo Satoru Power',
    paragraphs: '4',
    preview: 'Gojo Satoru is one of the strongest sorcerers in Jujutsu Kaisen.',
    isActive: true,
  },
  {
    id: 6,
    slug: 'levi-ackerman',
    title: 'Levi Ackerman Strength',
    paragraphs: '4',
    preview: 'Levi Ackerman is known as humanity’s strongest soldier in Attack on Titan.',
    isActive: true,
  },
  {
    id: 7,
    slug: 'itachi-uchiha',
    title: 'Itachi Uchiha Story',
    paragraphs: '4',
    preview: 'Itachi Uchiha is one of the most complex characters in Naruto.',
    isActive: true,
  },
  {
    id: 8,
    slug: 'zoro-one-piece',
    title: 'Roronoa Zoro Loyalty',
    paragraphs: '4',
    preview: 'Zoro is a swordsman and one of Luffy’s most loyal crew members.',
    isActive: true,
  },
  {
    id: 9,
    slug: 'nezuko-kamado',
    title: 'Nezuko Kamado Power',
    paragraphs: '4',
    preview: 'Nezuko is Tanjiro’s sister who turned into a demon.',
    isActive: true,
  },
  {
    id: 10,
    slug: 'sukuna-jujutsu',
    title: 'Sukuna King of Curses',
    paragraphs: '4',
    preview: 'Sukuna is one of the strongest curses in Jujutsu Kaisen.',
    isActive: true,
  }
];

const DashArticleListPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [articles, setArticles] = useState(initialArticles);

  const [modal, setModal] = useState({
    open: false,
    id: null,
  });

  const [form, setForm] = useState(blankForm);

  const [errors, setErrors] = useState({});

  const [searchTerm, setSearchTerm] = useState('');

  const [statusFilter, setStatusFilter] = useState('all');

  const resetForm = () => {
    setForm(blankForm);
    setErrors({});
  };

  const openModal = (article) => {
    setModal({
      open: true,
      id: article?.id ?? null,
    });

    setForm(article ? { ...article } : blankForm);
  };

  const closeModal = () => {
    setModal({
      open: false,
      id: null,
    });

    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.slug.trim()) {
      nextErrors.slug = 'Slug is required.';
    }

    if (!form.title.trim()) {
      nextErrors.title = 'Title is required.';
    }

    if (!form.paragraphs.trim()) {
      nextErrors.paragraphs = 'Paragraph count is required.';
    }

    if (!form.preview.trim()) {
      nextErrors.preview = 'Preview is required.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const nextArticle = {
      slug: form.slug.trim(),
      title: form.title.trim(),
      paragraphs: form.paragraphs.trim(),
      preview: form.preview.trim(),
      isActive: form.isActive,
    };

    setArticles((prev) =>
      modal.id
        ? prev.map((article) =>
            article.id === modal.id
              ? { ...article, ...nextArticle }
              : article
          )
        : [
            ...prev,
            {
              id:
                prev.reduce(
                  (max, article) => Math.max(max, article.id),
                  0
                ) + 1,
              ...nextArticle,
            },
          ]
    );

    closeModal();
  };

  const toggleStatus = (id) => {
    setArticles((prev) =>
      prev.map((article) =>
        article.id === id
          ? { ...article, isActive: !article.isActive }
          : article
      )
    );
  };

  const filteredArticles = articles.filter((article) => {
    const searchLower = searchTerm.toLowerCase();

    const matchesSearch =
      article.title.toLowerCase().includes(searchLower) ||
      article.slug.toLowerCase().includes(searchLower);

    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'active' && article.isActive) ||
      (statusFilter === 'inactive' && !article.isActive);

    return matchesSearch && matchesStatus;
  });

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    ...extra,
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },

    {
      field: 'slug',
      headerName: 'Slug',
      flex: 1,
    },

    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
    },

    {
      field: 'paragraphs',
      headerName: 'Paragraphs',
      width: 130,
    },

    {
      field: 'preview',
      headerName: 'Preview',
      flex: 2,
    },

    {
      field: 'status',
      headerName: 'Status',
      minWidth: 120,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? 'Active' : 'Inactive'}
          color={row.isActive ? 'success' : 'default'}
        />
      ),
    },

    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 220,
      sortable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => openModal(row)}
          >
            Edit
          </Button>

          <Button
            size="small"
            variant="contained"
            color={row.isActive ? 'warning' : 'success'}
            onClick={() => toggleStatus(row.id)}
          >
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          mb: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="h4">
          Articles
        </Typography>

        <Button
          variant="contained"
          onClick={() => openModal()}
        >
          Add Article
        </Button>
      </Box>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
        >
          <TextField
            label="Search Articles"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flexGrow: 1 }}
          />

          <TextField
            select
            label="Status"
            size="small"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            sx={{ minWidth: 140 }}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </TextField>
        </Stack>
      </Paper>

      <Paper sx={{ p: 2 }}>
        {filteredArticles.length ? (
          <Box sx={{ height: 520, width: '100%' }}>
            <DataGrid
              rows={filteredArticles}
              columns={columns}
              pageSizeOptions={[5, 10]}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                    page: 0,
                  },
                },
              }}
              disableRowSelectionOnClick
            />
          </Box>
        ) : (
          <Alert severity="info">
            No articles found.
          </Alert>
        )}
      </Paper>

      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle>
            {modal.id ? 'Edit Article' : 'Add Article'}
          </DialogTitle>

          <DialogContent dividers>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <TextField
                {...fieldProps('slug', 'Slug')}
              />

              <TextField
                {...fieldProps('title', 'Title')}
              />

              <TextField
                {...fieldProps('paragraphs', 'Paragraphs')}
              />

              <TextField
                {...fieldProps('preview', 'Preview', {
                  multiline: true,
                  rows: 4,
                })}
              />

              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                  />
                }
                label={
                  form.isActive
                    ? 'Article status: Active'
                    : 'Article status: Inactive'
                }
              />
            </Stack>
          </DialogContent>

          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button onClick={closeModal}>
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
            >
              {modal.id ? 'Update Article' : 'Save Article'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default DashArticleListPage;